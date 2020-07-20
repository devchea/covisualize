Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resource :users, only:[:create]
  post '/signin', to: 'sessions#authenticate'
  post '/signup', to: 'users#create'
end
