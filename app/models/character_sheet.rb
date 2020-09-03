# frozen_string_literal: true

# == Schema Information
#
# Table name: character_sheets
#
#  id            :integer          not null, primary key
#  name          :string
#  experience    :integer          default(150)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer
#  brawn         :integer          default(10)
#  intelligence  :integer          default(10)
#  perception    :integer          default(10)
#  agility       :integer          default(10)
#  dexterity     :integer          default(10)
#  determination :integer          default(10)
#  barter        :float            default(0.0)
#  money         :float            default(0.0)
#  description   :string
#
class CharacterSheet < ApplicationRecord
  has_many :character_sheet_skills, dependent: :destroy
  has_many :skills, through: :character_sheet_skills
  has_many :character_sheet_implications, dependent: :destroy
  has_many :implications, through: :character_sheet_implications
  belongs_to :user

  accepts_nested_attributes_for :character_sheet_skills
  accepts_nested_attributes_for :character_sheet_implications

  validates :name, presence: true
  validates :experience, numericality: { greater_than_or_equal_to: 0 }
  validates :brawn, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
  validates :determination, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
  validates :intelligence, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
  validates :perception, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
  validates :dexterity, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
  validates :agility, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 20 }
end
