GCR=asia-southeast1-docker.pkg.dev/personal-232705/agung-docker-repo
TAG=latest
IMAGE=nodejs-simple-app
PORT=3000
docker-build:
	docker build -t $(IMAGE):$(TAG) -t $(GCR)/$(IMAGE):$(TAG) . 

gcr-push:
	docker push $(GCR)/$(IMAGE):$(TAG)

deploy-cloud-run:
	gcloud run deploy $(IMAGE) --image $(GCR)/$(IMAGE):$(TAG) --region asia-southeast1 --port=$(PORT)
