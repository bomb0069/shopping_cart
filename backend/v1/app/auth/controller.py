from route import auth_blueprint
from flask import jsonify

# @auth_blueprint.route('/token/<token>')
# def validateToken(token):
#     # TODO: query user data by token
#     return jsonify(data={
#         user_id: '1',
#         name: 'Rittichai Timrattanakul',
#         phone: '0944866055',
#         address: '114 เพชรเกษม48 บางด้วน ภาษีเจริญ กทม 10160',
#         email: 'timrattanakul@gmail.com'
#     }), 200