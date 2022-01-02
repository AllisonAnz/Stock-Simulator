class UsersController < ApplicationController
    def index 
        render json: @current_user 
    end
    
    def show 
        user = User.find(session[:user_id])
       render json: user
    end
end
