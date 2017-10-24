FROM gcc:7.2.0

WORKDIR /home/

# tool for installing gmp
RUN wget https://download.savannah.gnu.org/releases/lzip/lzip-1.19.tar.gz && \
	tar -xvf lzip-1.19.tar.gz && rm lzip-1.19.tar.gz && \
	cd lzip-1.19 && \
	./configure --prefix=/usr && make && make install

# installing GMP
RUN wget https://gmplib.org/download/gmp/gmp-6.1.2.tar.lz && tar -xvf gmp-6.1.2.tar.lz && rm gmp-6.1.2.tar.lz

RUN cd gmp-6.1.2 && ./configure && make && make install


# installing NTL
RUN wget http://www.shoup.net/ntl/ntl-10.5.0.tar.gz && tar -zxvf ntl-10.5.0.tar.gz && rm ntl-10.5.0.tar.gz

RUN cd ntl-10.5.0/src && ./configure NTL_GMP_LIP=on && make && make install

# installing HElib
RUN git clone https://github.com/shaih/HElib.git
RUN cd HElib/src && make && make check
