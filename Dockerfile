FROM jekyll/minimal:3.8.5
RUN \
  gem install -v 0.14.0 jekyll-redirect-from && \
  gem install -v 1.2.0 jekyll-sitemap
ENV PATH="$PATH:$GEM_HOME/bin"
