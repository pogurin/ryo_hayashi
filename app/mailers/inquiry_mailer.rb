class InquiryMailer < ActionMailer::Base
  default from: "seiun340066@gmail.com"   # 送信元アドレス
  # default to: "seiun340066@gmail.com"     # 送信先アドレス
 
  def sendmail_confirm
     @greeting = "Hi"

    mail to: "seiun340066@gmail.com", subject: "ActionMailer test"
  end
 
end