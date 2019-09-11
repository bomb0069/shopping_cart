FROM python:3.7
ADD ./mockserver /app
WORKDIR /app
RUN pip install flask gunicorn
EXPOSE 5000
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app"]