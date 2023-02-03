
# Entrypoint file that runs Uvicorn server on port 8000 and reload on every file change
import uvicorn


if __name__ == "__main__":
    uvicorn.run("app.api:app", host="0.0.0.0", port=8000, reload=True)