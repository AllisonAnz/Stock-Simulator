module Functions
    
    module StockCalcs
        def self.buy_stock(stock, params)
            stock.shares = stock.shares + params[:shares]
            stock.avg_cost = ((stock.total_cost) + (params[:shares] * params[:avg_cost]))/stock.shares
            stock.total_cost = (stock.avg_cost) * (stock.shares)
            #byebug
        end

        def self.sell_stock(stock, params)
            #byebug
            stock.shares = stock.shares - params[:shares]
            if stock.shares <= 0 
                stock.avg_cost = 0 
            else
                stock.avg_cost = ((stock.total_cost) - (params[:avg_cost] * params[:shares]))
            end
            stock.total_cost = (stock.avg_cost) * (stock.shares)
        end

    end

    module APIRequests 
        def self.get_stock(ticker) 
             @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
             stock = StockQuote::Stock.quote(ticker)
        end

        def self.get_company_info(ticker)
            @api = StockQuote::Stock.new(api_key:  ENV['API_KEY'])
            company =  StockQuote::Stock.company(ticker)
        end

        def self.request_chart(params)
        #byebug
            response = RestClient.get 'https://www.alphavantage.co/query', { params: {
                function: 'TIME_SERIES_DAILY',
                symbol: params[:ticker],
                outputsize: 'full',
                apikey: ENV['ALPHA_API_KEY']
              } }

              JSON.parse(response)
             #render json: stock 
        end

    end

end