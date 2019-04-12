require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
  include Devise::Test::IntegrationHelpers

  def setup
    @user = users(:user)
  end

  test 'account activation' do
    mail = UserMailer.register_user(@user)
    assert_equal ['test@example.com'], mail.to
    assert_equal ['test@example.com'], mail.from
    assert_match @user.email_confirmation_token, mail.text_part.body.encoded
    assert_match CGI::escape(@user.email), mail.text_part.body.encoded

    assert_match @user.email_confirmation_token, mail.html_part.body.encoded
    assert_match CGI::escape(@user.email), mail.html_part.body.encoded
  end

  test 'password_reset' do
    @user.reset_token = User.new_token
    mail = UserMailer.password_reset(@user)
    assert_equal ['test@example.com'], mail.to
    assert_equal ['test@example.com'], mail.from
    assert_match @user.reset_token,        mail.body.encoded
    assert_match CGI::escape(@user.email), mail.body.encoded
  end
end
