# frozen_string_literal: true

class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to user
    else
      flash[:notice] = 'oooooo :C'
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
