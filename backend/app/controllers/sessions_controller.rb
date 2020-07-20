class SessionsController < ApplicationController

  def authenticate
    @user = User.find_by_username(params[:username])

    if @user && @user.authenticate(params[:password])
      token = JWT({user_id: @user.id}, 'mys3cr3t')
    else

    end
  end

end
