class SessionsController < ApplicationController

  def authenticate
    @user = User.find_by_username(params[:username])

    if @user && @user.authenticate(params[:password])
      token = JWT.encode({user_id: @user.id}, 'mys3cr3t')
      render json: {token: token}, status: :ok
    else
      render json: {error: 'Incorrect Username or Password'}
    end
  end

end
