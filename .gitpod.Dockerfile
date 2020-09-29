FROM gitpod/workspace-full

USER gitpod

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && \
#     sudo apt-get install -yq bastet && \
#     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
RUN wget -O /tmp/phantomjs-2.1.1-linux-x86_64.tar.bz2 https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN mkdir /tmp/phantomjs && mkdir -p /usr/local/lib/node_modules/phantomjs/lib/phantom/
RUN tar xvjf /tmp/phantomjs-2.1.1-linux-x86_64.tar.bz2 -C /tmp/phantomjs
RUN mv /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64/* /usr/local/lib/node_modules/phantomjs/lib/phantom/
RUN rm -rf /tmp/phantomjs-2.1.1-linux-x86_64.tar.bz && rm -rf /tmp/phantomjs