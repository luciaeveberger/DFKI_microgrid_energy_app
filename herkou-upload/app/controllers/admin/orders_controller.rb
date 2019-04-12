class Admin::OrdersController < OrdersController
  before_action :admin?

  def index
    @finished_orders = Order.finished_orders
    @all_orders = Order.bought_orders
    @pending_orders = Order.pending_orders
  end

  def confirm_account_transaction
    order = Order.find(params[:order_id])
    order.active!

    order.order_items.each do |item|
      order.user.license_codes.create!(title: item.license.title, expiration_date: item.license.expiration_date)
    end
    redirect_to admin_orders_path
  end

  private

  def admin?
    unless current_user.admin?
      flash[:error] = 'Only Admins are allowed to access this page'
      redirect_to root_path
    end
  end
end
