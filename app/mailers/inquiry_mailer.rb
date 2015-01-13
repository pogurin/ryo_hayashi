class InquiryMailer < ActionMailer::Base
  default from: "seiun340066@gmail.com"   # 送信元アドレス
  default to: "seiun340066@gmail.com" 
  
 def received_email(inquiry)
    @inquiry = inquiry
    if @inquiry.file.present?
      attachments["#{@inquiry.file.original_filename}"] = @inquiry.file.read
    end
    mail(:subject => 'お問い合わせを承りました')
  end
end