# frozen_string_literal: true

class CharacterSheetsController < ApplicationController
  before_action :fetch_user

  def index
    @sheets = @user.character_sheets
  end

  def new
    @sheet = @user.character_sheets.build
  end

  def create
    @sheet = @user.character_sheets.build(character_sheet_params)
    if @sheet.save
      flash[:notice] = 'Successfully created'
      redirect_to user_character_sheet_path(@user, @sheet)
    else
      flash[:notice] = 'Something wrong'
      render :new
    end
  end

  private

  def character_sheet_params
    params.require(:character_sheet).permit(:name, :experience)
  end

  def fetch_user
    @user = helpers.current_user
  end
end
