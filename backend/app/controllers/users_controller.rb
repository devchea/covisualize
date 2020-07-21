class UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {user: @user.username}, status: :created
    else
      render json: {errors: 'Please choose a different username'}, status: :unprocessable_entity
    end

  end

  def user_params
    params.require(:user). permit([:username, :password])
  end
end
