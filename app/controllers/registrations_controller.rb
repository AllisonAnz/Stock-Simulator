class RegistrationsController < ApplicationController
      rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def create 
        user = User.create!(
            email: params['user']['email'],
            password: params['user']['password'],
            password_confirmation: params['user']['password_confirmation']   
        ) 
        if user 
            session[:user_id] = user.id 
            render json: {
                status: :created,
                user: user 
            }
        else 
           render json: { errors: user.errors.full_messages }, status: 500
        end 
    end

    private 

    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
