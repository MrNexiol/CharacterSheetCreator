# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password
  has_many :character_sheets, dependent: :destroy

  before_save { self.email = email.downcase }

  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 25 }
  validates :email, presence: true, uniqueness: true, format: { with: /\A\S+@.+\.\S+\z/ }
end
