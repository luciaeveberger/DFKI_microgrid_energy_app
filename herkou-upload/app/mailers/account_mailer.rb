class AccountMailer < ApplicationMailer
  def send_order_account(user, pdf)
    @user = user
    attachments["account-energenious-#{DateTime.now}.pdf"] = pdf
    mail(to: @user.email, subject: 'Order of your energenious-license')
    logger.debug 'Send email to new user'
  end
end