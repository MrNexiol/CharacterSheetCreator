# frozen_string_literal: true

# == Schema Information
#
# Table name: skills
#
#  id               :integer          not null, primary key
#  name             :string
#  parent_stat      :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  start_value      :integer          default(0)
#  is_equal_to_stat :boolean          default(FALSE)
#
class Skill < ApplicationRecord
  has_many :character_sheet_skills, dependent: :destroy
  has_many :character_sheets, through: :character_sheet_skills

  attr_reader :value

  validates :name, presence: true
  validates :parent_stat, presence: true
  validates :start_value, numericality: { greater_than_or_equal_to: 0 }

  STAT_NAMES = %w[brawn determination intelligence perception dexterity agility].freeze
end
