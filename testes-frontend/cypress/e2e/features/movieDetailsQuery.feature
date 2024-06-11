Feature: Consulta de detalhes de filmes

    Scenario: Deve ser possível visualizar todas as informações de um filme com um usuário do tipo comum
        Given que estou logado e autenticado no sistema
        And sou um usuário do tipo comum
        When seleciono um filme qualquer
        Then tenho acesso à todas aos detalhes do filme selecionado
        
    Scenario: Deve ser possível visualizar todas as informações de um filme com um usuário do tipo admin
        Given que estou logado e autenticado no sistema
        And sou um usuário do tipo admin
        When seleciono um filme qualquer
        Then tenho acesso à todas aos detalhes do filme selecionado
        
    Scenario: Deve ser possível visualizar todas as informações de um filme com um usuário do tipo critico
        Given que estou logado e autenticado no sistema
        And sou um usuário do tipo critico
        When seleciono um filme qualquer
        Then tenho acesso à todas aos detalhes do filme selecionado

    Scenario: Deve ser possível visualizar todas as informações de um filme sem estar logado
        Given que estou na página de filmes
        When seleciono um filme qualquer
        Then tenho acesso à todas aos detalhes do filme selecionado
    
    # Scenario: Deve ser possível acessar um filme pela ID na URL
    #     Given que estou na página de filmes
    #     When seleciono um filme qualquer
    #     Then tenho acesso à todas aos detalhes do filme selecionado

    Scenario: Deve ser possível visualizar a soma das avaliações da audiência
        Given que estou na página de filmes
        When seleciono um filme qualquer
        Then consigo visualizar a média das avaliações da audiência
    
    Scenario: Deve ser possível visualizar a soma das avaliações da crítica
        Given que estou na página de filmes
        When seleciono um filme qualquer
        Then consigo visualizar a média das avaliações da crítica
    
    Scenario: Deve ser possível acessar a opção para avaliar filme
        Given que estou logado e autenticado no sistema
        And estou na página de filmes
        When seleciono um filme qualquer
        Then consigo criar uma avaliação
    
    Scenario: Deve ser possível visualizar informações de uma avaliação
        Given que estou na página de filmes
        When seleciono um filme qualquer
        Then consigo visualizar todas os detalhes de uma avaliação
