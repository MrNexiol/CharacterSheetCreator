# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  username        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email     (email) UNIQUE
#  index_users_on_username  (username) UNIQUE
#
class User < ApplicationRecord
  has_secure_password
  has_many :character_sheets, dependent: :destroy

  before_save { self.email = email.downcase }

  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 50 }
  validates :email, presence: true, uniqueness: true, format: { with: /\A\S+@.+\.\S+\z/ }
end
