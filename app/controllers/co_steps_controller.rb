class CoStepsController < ApplicationController
  def new
    
  end

  def index
    @inquiry = Inquiry.new
    render :action => 'index'
  end

  def show 
    
  end
end
