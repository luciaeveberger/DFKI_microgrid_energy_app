class LicensesController < ApplicationController
  def index
    @licenses   = License.all
    @order_item = current_order.order_items.new if current_user
  end

  def show
    @license = License.find(params[:id])
    @order_item = current_order.order_items.new if current_user
  end
end