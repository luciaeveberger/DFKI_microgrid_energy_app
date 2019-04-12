require 'test_helper'

class PasswordResetsTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers

  def setup
    ActionMailer::Base.deliveries.clear
    @user                  = users(:user)
    @password_reset_create = { params: { password_reset: { email: @user.email } } }
  end

  test 'password resets' do
    # Empty email
    post user_password_path, params: { passwords: { email: '' } }
    assert_not flash.empty?

    # Valid email
    post user_password_path, @password_reset_create
    assert_not_equal @user.reset_password_token, @user.reload.reset_password_token
    assert_equal 1, ActionMailer::Base.deliveries.size
    assert_not flash.empty?
    assert_redirected_to root_url

    user = User.find_by(id: @user.id)

    # Wrong email
    get edit_user_password_path(user.reset_password_token, email: '', id: @user.id)
    assert_redirected_to root_url

    # Inactive user
    user.confirmation_token = nil
    user.confirmed_at = nil
    user.confirmation_sent_at = nil
    user.unconfirmed_email = nil
    get edit_user_password_path(user.reset_password_token, email: user.email, id: @user.id)
    assert_redirected_to root_url

    # Right email, wrong token
    user = users(:user)
    get edit_user_password_path('wrong token', email: user.email, id: @user.id)
    assert_redirected_to root_url

    # Right email, right token
    get edit_password_path(user.reset_password_token, email: user.email)

    # Invalid password & confirmation
    patch password_reset_path(user),
          params: {
              email: user.email,
              user:  { password:              'foo_wrong123',
                       password_confirmation: 'bar_wrong123' }
          }

    # Empty password
    patch password_reset_path(user),
          params: {
              email: user.email,
              user:  { password:              '',
                       password_confirmation: '' }
          }

    # Valid password & confirmation
    patch password_reset_path(user),
          params: {
              email: user.email,
              user:  { password:              'foobar',
                       password_confirmation: 'foobar' }
          }
    assert_not flash.empty?
    assert_redirected_to root_url
  end
end