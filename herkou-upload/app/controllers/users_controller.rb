class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
    @user.organization = Organization.new if @user.organization.nil?
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:success] = 'Profile updated'
      redirect_to @user
    else
      render 'edit'
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :address, :country,
                                 :city, :zip, :phone, :depositor, :iban, :bic,
                                 organization_attributes: [:id, :name, :address, :country, :city, :zip, :phone])
  end

  # Confirms the correct user.
  def correct_user
    @user = User.find(params[:id])
    unless @user == current_user
      flash.now[:alert] = 'You cannot access this area because this is not your profile'
      redirect_to(root_url)
    end
  end

end
