# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
jobs = [
  {
    :title => 'Entry Level Software Engineer 25441BR',
    :company => 'Ford',
    :company_url => 'http://www.ford.com',
    :apply_date => DateTime.new(2016, 10, 8)
  },
  {
    :title => 'Entry Level Application Developer',
    :company => 'Locus Technologies',
    :company_url => 'http://www.locustec.com',
    :apply_date => DateTime.new(2016, 10, 7)
  },
  {
    :title => 'Software Engineer - Entry Level',
    :company => '{SAW} Software Mill',
    :company_url => 'http://www.sawsoftmill.com',
    :apply_date => DateTime.new(2016, 10, 12)
  }
]


jobs.each do |job_params|
  Job.create(job_params)
end
