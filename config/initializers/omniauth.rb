OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['1383124658660285'], ENV['19beef301374bc6570a8cca51fd5a4a8']
end