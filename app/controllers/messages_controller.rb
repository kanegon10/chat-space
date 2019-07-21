class MessagesController < ApplicationController
  def index
    @messages = message.includes(:body)
  end

  def show
  end
end
