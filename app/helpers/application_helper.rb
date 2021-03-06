# frozen_string_literal: true

module ApplicationHelper
  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !session[:user_id].nil?
  end
end
