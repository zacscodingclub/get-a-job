class JobsController < ApplicationController
  def index
  	 jobs = Job.all

     render json: jobs
  end

  def create
  	job = Job.new(job_params)

    if job.save
      render json: job
    else
      render json: { errors: job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    job = Job.find(params[:id])

    render json: job
  end

  def update
    job = Job.find(params[:id])

    if job.update(job_params)
      render json: job
    else
      render json: { errors: job.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    job = Job.find(params[:id])
    job.destroy
  end

  private

    def job_params
      params.require(:job).permit(:title, :company, :company_url, :apply_date)
    end
end
