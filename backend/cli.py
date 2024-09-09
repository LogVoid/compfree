#!/usr/bin/env python3

import argparse
from config import db
from models import Product

def add_product(name: str, description: str, img: str = None, price: float = None) -> None:
    new_product = Product(name=name, description=description, img=img, price=price)
    db.session.add(new_product)
    db.session.commit()
    print(f'Product "{name}" added to the database!')

def edit_product(pid: int, name: str = None, description: str = None, img: str = None, price: float = None) -> None:
    prod = db.session.get(Product, pid)
    if prod:
        if name is not None:
            prod.name = name
        if description is not None:
            prod.description = description
        if img is not None:
            prod.img = img
        if price is not None:
            prod.price = price
        db.session.commit()
        print(f'Product "{pid}" updated successfully!')
    else:
        print(f'Product with ID "{pid}" not found.')

def delete_product(pid: int) -> None:
    prod = db.session.get(Product, pid)
    if prod:
        db.session.delete(prod)
        db.session.commit()
        print(f'Product "{pid}" deleted successfully!')
    else:
        print(f'Product with ID "{pid}" not found.')

def list_products() -> None:
    prods = Product.query.all()
    if prods:
        for prod in prods:
            print(f"ID: {prod.id} Name: {prod.name} Description: {prod.description} Image: {prod.img} Price: {prod.price}")
    else:
        print("No products found.")

def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Product management CLI")
    subparsers = parser.add_subparsers(dest="command")

    commands = {
        "add": {
            "help": "Add a new product",
            "args": [
                ("name", str, "The name of the product (str)"),
                ("description", str, "The description of the product (str)"),
                ("img", str, "The image URL of the product (str)"),
                ("price", float, "The price of the product (float)")
            ]
        },
        "edit": {
            "help": "Edit an existing product",
            "args": [
                ("id", int, "The ID of the product to edit (int)"),
                ("--name", str, "The new name of the product (str)"),
                ("--description", str, "The new description of the product (str)"),
                ("--img", str, "The new image URL of the product (str)"),
                ("--price", float, "The new price of the product (float)")
            ]
        },
        "delete": {
            "help": "Delete a product",
            "args": [
                ("id", int, "The ID of the product to delete (int)")
            ]
        },
        "list": {
            "help": "List all products",
            "args": []
        }
    }

    for command, details in commands.items():
        cmd_parser = subparsers.add_parser(command, help=details["help"])
        for arg in details["args"]:
            cmd_parser.add_argument(arg[0], type=arg[1], help=arg[2], nargs="?" if arg[0].startswith("--") else None)

    args = parser.parse_args()
    if args.command == "add" and args.img == "None":
        args.img = None
    if args.command == "edit" and args.img == "None":
        args.img = None

    return args

def main() -> None:
    args = parse_args()

    from config import app
    with app.app_context():
        if args.command == "add":
            add_product(args.name, args.description, args.img, args.price)
        elif args.command == "edit":
            edit_product(args.id, args.name, args.description, args.img, args.price)
        elif args.command == "delete":
            delete_product(args.id)
        elif args.command == "list":
            list_products()
        else:
            print("Invalid command.")
            parser.print_help()

if __name__ == "__main__":
    main()

