# frozen_string_literal: true

# == Schema Information
#
# Table name: implications
#
#  id           :integer          not null, primary key
#  name         :string
#  description  :string
#  is_advantage :boolean
#  max_level    :integer
#  point_cost   :integer
#
class Implication < ApplicationRecord
  has_many :character_sheet_implications, dependent: :destroy
  has_many :character_sheets, through: :character_sheet_implications

  validates :max_level, numericality: { greater_than_or_equal_to: 0 }
  validates :point_cost, numericality: { greater_than_or_equal_to: 0 }
  validates :description, presence: true
  validates :name, presence: true
end
