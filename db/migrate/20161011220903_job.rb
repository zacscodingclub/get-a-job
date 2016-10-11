class Job < ActiveRecord::Migration[5.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.string :company_url
      t.datetime :apply_date

      t.timestamps
    end
  end
end
