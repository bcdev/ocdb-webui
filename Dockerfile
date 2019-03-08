FROM nginx:1.12-alpine

MAINTAINER helge.dzierzon@brockmann-consult.de

LABEL software=OCDB
LABEL version=0.1.0

RUN wget https://github.com/bcdev/eocdb-webui/releases/download/untagged-3c18ed302ad0cdae596b/build_v0.1.0dev1.tgz
RUN tar xvf build_v0.1.0dev1.tgz && mv build/* /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
