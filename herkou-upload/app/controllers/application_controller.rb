class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  helper_method :current_order
  

  def current_order
    # if No user is logged in or active
    return nil if current_user.nil?

    if !session[:order_id].nil?
      order = Order.find_by(id: session[:order_id])
      order.nil? ? current_user.orders.new : order
    else
      current_user.orders.new
    end
  end
end
