# frozen_string_literal: true

class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user&.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:notice] = 'Logged in'
      redirect_to user
    else
      render 'new'
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:notice] = 'Successfully logged out'
    redirect_to root_path
  end
end
