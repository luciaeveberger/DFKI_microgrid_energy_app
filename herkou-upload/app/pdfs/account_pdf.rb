require "prawn/table"
include ActiveSupport::NumberHelper
class AccountPdf < Prawn::Document
  def initialize(order, user)
    super()
    @user        = user
    @order = order
    @order_items = order.order_items
    @licenses    = @order_items.map { |item| License.find(item.license_id) }

    title
    # header
    text_content
    table_content
  end

  def title
    text 'Order of energenious license', size: 21, style: :bold
    text "Order date: #{@order.created_at.localtime.to_formatted_s(:long)}"
    text 'Street 1'
    text '12345 City'
    text 'Germany'
    text 'email address / phone'
  end

  def header
    # This inserts an image as a header
    #image "#{Rails.root}/app/assets/images/*.png", width: 530, height: 150
  end

  def text_content
    # The cursor for inserting content starts on the top left of the page. Here we move it down a little to create more
    y_position = cursor - 50

    # The bounding_box takes the x and y coordinates for positioning its content and some options to style it
    bounding_box([0, y_position], :width => 270, :height => 100) do
      text 'User information', size: 15, style: :bold
      text "#{@user.full_name}"
      text "#{@user.email}"
      text "#{@user.address}" if @user.address.present?
      text "#{@user.city}" if @user.city.present?
      text "#{@user.zip}" if @user.zip.present?
      text "#{@user.country}" if @user.country.present?
      text "#{@user.phone}" if @user.phone.present?
    end

    bounding_box([300, y_position], :width => 270, :height => 100) do
      text 'Payment information', size: 15, style: :bold
      text "#{@user.depositor}"
      text "#{@user.iban}"
      text "#{@user.bic}"
    end

    return if @user.organization.nil? || @user.organization.name.blank?

    bounding_box([0, cursor], :width => 270, :height => 100) do
      text 'Organization information', size: 15, style: :bold
      text "#{@user.organization.name}"
      text "#{@user.organization.address}" if @user.organization.address.present?
      text "#{@user.organization.zip}" if @user.organization.zip.present?
      text "#{@user.organization.city}" if @user.organization.city.present?
      text "#{@user.organization.country}" if @user.organization.country.present?
      text "#{@user.organization.phone}" if @user.organization.phone.present?
    end

  end

  def table_content
    # This makes a call to product_rows and gets back an array of data that will populate the columns and rows of a table
    # I then included some styling to include a header and make its text bold. I made the row background colors alternate between grey and white
    # Then I set the table column widths

    text 'Ordering', size: 15, style: :bold
    table product_rows do
      row(0).font_style  = :bold
      self.header        = true
      self.row_colors    = ['DDDDDD', 'FFFFFF']
      self.column_widths = [70, 400, 70]
    end

    # total price
    table total_price_row do
      row(0).font_style  = :bold
      self.header        = true
      self.row_colors    = ['FFFFFF']
      self.column_widths = [70, 400, 70]
    end
  end

  def product_rows
    rows = [['Quantity', 'Title', 'Price']]

    @licenses.zip(@order_items) do |license, item|
      rows << [item.quantity, license.title, number_to_currency(item.total_price)]
    end
    return rows
  end

  def total_price_row
    [['', '', number_to_currency(@order.subtotal)]]
  end
end