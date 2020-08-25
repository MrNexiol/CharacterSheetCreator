class DeleteValueFromSkill < ActiveRecord::Migration[6.0]
  def change
    remove_column :skills, :value
  end
end
