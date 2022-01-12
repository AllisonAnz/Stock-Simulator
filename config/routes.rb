Rails.application.routes.draw do
  resources :stocks
  
  #resources :search_stocks, only: [:index]
  resources :users, only: [:show]
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :transactions
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  get :find_chart, to: "stocks#find_chart"

  #post "/stocks" => 'stocks#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
