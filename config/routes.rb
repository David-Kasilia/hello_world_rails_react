Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  root to: 'homepage#index'

  get '/greeting', to: 'homepage#index'
  
  namespace :api do
    namespace :v1 do
      resources :messages
    end
  end
end

# get 'homepage/index'