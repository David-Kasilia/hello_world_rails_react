class Api::V1::MessagesController < ApplicationController
  def index
    render json: Message.all
  end

  def show; end
end
