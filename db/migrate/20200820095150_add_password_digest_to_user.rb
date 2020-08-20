class AddPasswordDigestToUser < ActiveRecord::Migration[6.0]
  change_table :users do |t|
    t.string :password_digest
  end
end
