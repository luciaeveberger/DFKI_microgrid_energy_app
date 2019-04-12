class OrderItemsController < ApplicationController
  #before_action :authenticate_user!

  def create
    @order = current_order
    if @order.order_items.any? { |item| item.license_id == order_item_params[:license_id].to_i }
      flash[:warn] = 'This license is already in your cart'
      redirect_to licenses_path
      return
    end
    @order_item = @order.order_items.new(order_item_params)
    @order.save
    session[:order_id] = @order.id
  end

  def update
    @order      = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.update_attributes(order_item_params)
    @order_items = @order.order_items
  end

  def destroy
    @order      = current_order
    @order_item = @order.order_items.find(params[:id])
    @order_item.destroy
    @order_items = @order.order_items
  end

  private

  def order_item_params
    params.require(:order_item).permit(:quantity, :license_id)
  end
end
