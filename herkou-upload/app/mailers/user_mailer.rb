class UserMailer < ApplicationMailer
  default from: 'test@example.com'

  def register_user(user)
    @user = user
    mail(to: @user.email, subject: 'Account Aktivierung')
    logger.debug 'Send email to new user'
  end

  def password_reset(user)
    @user = user
    mail(to: @user.email, subject: 'Password reset instruction')
    logger.debug 'Send email to user who forgot his password'
  end
end
