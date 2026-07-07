import json
import re
import os

from google import genai
from dotenv import load_dotenv

from ai.prompts import (
    PRODUCT_AI_PROMPT,
    COMPARE_PROMPT,
    CHAT_PROMPT,
)

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_product_ai(product, products):

    data = {
        "product": product,
        "products": products
    }

    prompt = PRODUCT_AI_PROMPT

    prompt = prompt.replace(
        "PRODUCT_DATA",
        json.dumps(product, indent=2)
    )

    prompt = prompt.replace(
        "AVAILABLE_PRODUCTS_DATA",
        json.dumps(products, indent=2)
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    text = response.text.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "").strip()

    text = re.sub(r",(\s*[\]}])", r"\1", text)

    return json.loads(text)

# def generate_product_summary(product):

#     prompt = SUMMARY_PROMPT.replace(
#         "PRODUCT_DATA",
#         json.dumps(product, indent=2)
#     )

#     response = client.models.generate_content(
#         model="gemini-2.5-flash",
#         contents=prompt
#     )

#     text = response.text.strip()

#     text = text.replace("```json", "")
#     text = text.replace("```", "").strip()

#     text = re.sub(r",(\s*[\]}])", r"\1", text)

#     return json.loads(text)


def compare_products(product1, product2):

    data = {
        "Product 1": product1,
        "Product 2": product2
    }

    prompt = COMPARE_PROMPT.replace(
        "PRODUCT_DATA",
        json.dumps(data, indent=2)
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    text = response.text.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "").strip()

    text = re.sub(r",(\s*[\]}])", r"\1", text)

    return json.loads(text)


def chat_with_product(product, question):

    prompt = CHAT_PROMPT.replace(
        "PRODUCT_DATA",
        json.dumps(product, indent=2)
    )

    prompt = prompt.replace(
        "QUESTION",
        question
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text.strip()


# def recommend_products(product, products):

#     data = {
#         "product": product,
#         "products": products
#     }

#     prompt = RECOMMEND_PROMPT

#     prompt = prompt.replace(
#         "PRODUCT_DATA",
#         json.dumps(product, indent=2)
#     )

#     prompt = prompt.replace(
#         "AVAILABLE_PRODUCTS_DATA",
#         json.dumps(products, indent=2)
#     )

#     response = client.models.generate_content(
#         model="gemini-2.5-flash",
#         contents=prompt
#     )

#     text = response.text.strip()

#     text = text.replace("```json", "")
#     text = text.replace("```", "").strip()

#     text = re.sub(r",(\s*[\]}])", r"\1", text)

#     return json.loads(text)