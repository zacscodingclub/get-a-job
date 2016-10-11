class JobSerializer < ActiveModel::Serializers
  attributes :id, :title, :company, :company_url, :apply_date, :created_at, :updated_at
end
