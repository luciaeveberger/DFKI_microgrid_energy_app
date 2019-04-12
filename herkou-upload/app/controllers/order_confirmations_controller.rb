class OrderConfirmationsController < ApplicationController
  #before_action :authenticate_user!

  def show
    @order_items = current_order.order_items
    @user        = current_user
  end

  def create
    @user        = current_user

    # Update order status as pending
    current_order.pending!

    # Send account to user's email
    pdf = AccountPdf.new(current_order, @user).render
    AccountMailer.send_order_account(@user, pdf).deliver

    # Reset cart information now
    session[:order_id] = nil
    current_order.save!
    current_order = nil

    flash[:notice] = 'Your order will be attended. A summary of your order has been sent to your email'

    redirect_to orders_path
  end
end