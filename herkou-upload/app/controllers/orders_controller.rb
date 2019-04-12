class OrdersController < ApplicationController
  before_action :authenticate_user!

  def index
    @orders = current_user.finished_orders
  end

  def show
    order       = Order.find(params[:id])
    order_items = order.order_items
    @user       = order.user
    respond_to do |format|
      format.html do
        @orders = current_user.finished_orders
        render 'index'
      end
      format.pdf do
        pdf = AccountPdf.new(order, @user)
        send_data pdf.render, filename: "account-energenious-#{DateTime.now}.pdf", type: 'application/pdf'
      end
    end
  end
end