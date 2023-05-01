from flask import Flask, render_template, request, jsonify
from google.cloud import vision

app = Flask(__name__, template_folder='C:/Users/91843/OneDrive - BENNETT UNIVERSITY/Project/StyleMate')

@app.route('/')
def home():
    return render_template('ty.html')

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files['image']
    image = file.read()

    client = vision.ImageAnnotatorClient.from_service_account_file('my-project-2-383406-1e1421610ec7.json')
    image = vision.Image(content=image)
    response = client.object_localization(image=image)

    objects = []
    for obj in response.localized_object_annotations:
        objects.append(obj.name)

    return jsonify({'labels': objects})

if __name__ == '__main__':
    app.run(debug=True)

