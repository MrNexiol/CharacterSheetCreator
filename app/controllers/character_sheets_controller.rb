# frozen_string_literal: true

class CharacterSheetsController < ApplicationController
  before_action :fetch_user

  def index
    @sheets = @user.character_sheets
  end

  def show
    @sheet = CharacterSheet.find(params[:id])
  end

  def new
    @sheet = @user.character_sheets.build do |cs|
      Skill.all.each do |skill|
        cs.character_sheet_skills.new(skill: skill, value: skill.start_value)
      end
    end
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
    params.require(:character_sheet).permit(:name, :experience, :brawn, :determination,
                                            :intelligence, :perception, :dexterity, :agility,
                                            character_sheet_skills_attributes: %i[skill_id value])
  end

  def fetch_user
    @user = helpers.current_user
  end
end
